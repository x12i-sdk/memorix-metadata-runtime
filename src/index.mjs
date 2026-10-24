import assert from 'node:assert/strict';
import { createInMemoryMetadataStore, installMetadataPack, packFromStore } from '@x12i/memorix-metadata-runtime';
const pack = {
  format: 'memorix-metadata/1', agentId: 'demo-agent',
  agents: [{ id: 'demo-agent', name: 'Example agent' }],
  objectTypes: [], abstractTypes: [], relationshipDefinitions: [], mappings: [],
  views: [], writes: [], sources: [], services: [], pipelines: [], schedules: [],
};
const store = createInMemoryMetadataStore();
const first = installMetadataPack(store, pack, { now: '2026-01-01T00:00:00.000Z', orgId: 'demo-org' });
assert.equal(first.ok, true, JSON.stringify(first.issues));
assert.equal(first.noop, false);
const second = installMetadataPack(store, pack);
assert.equal(second.ok, true);
assert.equal(second.noop, true);
assert.equal(packFromStore(store, 'demo-agent').agentId, 'demo-agent');
console.log({ installed: first.agentId, checksum: first.checksum, repeatWasNoop: second.noop });
