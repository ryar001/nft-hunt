import { describe,expect,it,test} from "vitest"
export default function Summ(a,b){
    let x=a+b
    return x
}

if (import.meta.vitest){
    const { describe,expect,it,test} = import.meta.vitest
    describe('add 2 num',function(){
        it("return 3",()=>{
            expect(Summ(2,1)).toEqual(3)
        })
        it('expect 0',()=>{
            expect(Summ(0,0)).toBe(0)
        })
        
    })
    const stockBill = {
        type: 'apples',
        count: 13,
      }
      
    const stockMary = {
    type: 'apples',
    count: 13,
    }
    
    test('stocks have the same properties', () => {
    expect(stockBill).toEqual(stockMary)
    })
    
    test('stocks are not the same', () => {
    expect(stockBill).not.toBe(stockMary)
    })

}
