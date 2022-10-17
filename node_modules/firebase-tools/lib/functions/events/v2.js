"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_LAB_EVENT = exports.REMOTE_CONFIG_EVENT = exports.DATABASE_EVENTS = exports.FIREBASE_ALERTS_PUBLISH_EVENT = exports.STORAGE_EVENTS = exports.PUBSUB_PUBLISH_EVENT = void 0;
exports.PUBSUB_PUBLISH_EVENT = "google.cloud.pubsub.topic.v1.messagePublished";
exports.STORAGE_EVENTS = [
    "google.cloud.storage.object.v1.finalized",
    "google.cloud.storage.object.v1.archived",
    "google.cloud.storage.object.v1.deleted",
    "google.cloud.storage.object.v1.metadataUpdated",
];
exports.FIREBASE_ALERTS_PUBLISH_EVENT = "google.firebase.firebasealerts.alerts.v1.published";
exports.DATABASE_EVENTS = [
    "google.firebase.database.ref.v1.written",
    "google.firebase.database.ref.v1.created",
    "google.firebase.database.ref.v1.updated",
    "google.firebase.database.ref.v1.deleted",
];
exports.REMOTE_CONFIG_EVENT = "google.firebase.remoteconfig.remoteConfig.v1.updated";
exports.TEST_LAB_EVENT = "google.firebase.testlab.testMatrix.v1.completed";
