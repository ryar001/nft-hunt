"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDocuments = exports.deleteDocument = exports.listCollectionIds = void 0;
const api_1 = require("../api");
const apiv2_1 = require("../apiv2");
const apiClient = new apiv2_1.Client({
    auth: true,
    apiVersion: "v1",
    urlPrefix: api_1.firestoreOriginOrEmulator,
});
function listCollectionIds(project) {
    const url = "projects/" + project + "/databases/(default)/documents:listCollectionIds";
    const data = {
        pageSize: 2147483647,
    };
    return apiClient.post(url, data).then((res) => {
        return res.body.collectionIds || [];
    });
}
exports.listCollectionIds = listCollectionIds;
async function deleteDocument(doc) {
    return apiClient.delete(doc.name);
}
exports.deleteDocument = deleteDocument;
async function deleteDocuments(project, docs) {
    const url = "projects/" + project + "/databases/(default)/documents:commit";
    const writes = docs.map((doc) => {
        return { delete: doc.name };
    });
    const data = { writes };
    const res = await apiClient.post(url, data);
    return res.body.writeResults.length;
}
exports.deleteDocuments = deleteDocuments;
