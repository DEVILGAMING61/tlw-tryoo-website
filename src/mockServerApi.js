// Simple client-side mock API that simulates network latency
const servers = [
  { id: 'srv-1', name: 'Survival', ram: '8G', storage: '16G', players: 'unlimited', status: 'online' },
  { id: 'srv-2', name: 'Creative', ram: '8G', storage: '16G', players: 'unlimited', status: 'stopped' },
];

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function fetchServers() {
  await wait(600 + Math.random() * 400);
  return servers.slice();
}

export async function createServer(data) {
  await wait(800 + Math.random() * 600);
  const s = { id: `srv-${Date.now()}`, status: 'provisioning', ...data };
  servers.push(s);
  return s;
}

export async function deleteServer(id) {
  await wait(200 + Math.random() * 300);
  const idx = servers.findIndex((s) => s.id === id);
  if (idx !== -1) servers.splice(idx, 1);
  return { ok: true };
}

export default { fetchServers, createServer, deleteServer };
