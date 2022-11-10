{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE FlexibleContexts    #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE TypeApplications    #-}
{-# LANGUAGE TypeFamilies        #-}
{-# LANGUAGE TypeOperators       #-}

module TypedValidator where

import           Control.Monad       hiding (fmap)
import           Data.Map            as Map
import           Data.Text           (Text)
import           Data.Void           (Void)
import           Plutus.Contract
import           PlutusTx            (Data (..))
import qualified PlutusTx
import qualified PlutusTx.Builtins   as Builtins
import           PlutusTx.Prelude    hiding (Semigroup(..), unless)
import           Ledger              hiding (singleton)
import           Ledger.Constraints  as Constraints
import qualified Ledger.Typed.Scripts      as Scripts
import           Ledger.Ada          as Ada
import           Playground.Contract (printJson, printSchemas, ensureKnownCurrencies, stage)
import           Playground.TH       (mkKnownCurrencies, mkSchemaDefinitions)
import           Playground.Types    (KnownCurrency (..))
import           Prelude             (IO, Semigroup (..), String)
import           Text.Printf         (printf)
import Language.Haskell.TH (RuleBndr(TypedRuleVar))
import  System.Random   as  Rand
import Control.Monad.IO.Class
{-# OPTIONS_GHC -fno-warn-unused-imports #-}

--THE ON-CHAIN CODE

{-# INLINABLE typedRedeemer #-} -- Everything that its supposed to run in on-chain code need this pragma INLINABLE
typedRedeemer :: () -> Integer -> ScriptContext -> Bool   
typedRedeemer _ redeemer _ = traceIfFalse "wrong redeemer" (redeemer == 42)
 

data Typed                                            -- New type that encode the information about the Datum and the Redeemer
instance Scripts.ValidatorTypes Typed where
    type instance DatumType Typed = ()                -- Type instances to define the type of Datum
    type instance RedeemerType Typed = Integer        -- Type instance to definte the type of Redeemer

typedValidator :: Scripts.TypedValidator Typed
typedValidator = Scripts.mkTypedValidator @Typed      -- Tell the compiler that you are using Typed
    $$(PlutusTx.compile [|| typedRedeemer ||]) 
    $$(PlutusTx.compile [|| wrap ||])                -- Provide the translation into high level typed to low level types
  where
    wrap = Scripts.wrapValidator @() @Integer        -- Tell wrapvalidtor which types to use for Datum and Redeemer
    

validator :: Validator
validator = Scripts.validatorScript typedValidator   -- Get the untyped validator script of the typeValidator PlutusCore

valHash :: Ledger.ValidatorHash
valHash = Scripts.validatorHash typedValidator       -- Using Typed (Typed.Scripts) version of validatorHash we get the valHash of typedValidator script

scrAddress :: Ledger.Address
scrAddress = scriptAddress validator 
