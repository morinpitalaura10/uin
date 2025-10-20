import * as FileSystem from 'expo-file-system';

const fileUri = FileSystem.documentDirectory + 'data.json';

export const readData = async () => {
  try {
    const file = await FileSystem.readAsStringAsync(fileUri);
    return JSON.parse(file);
  } catch (e) {
    return []; // Kalau belum ada file
  }
};

export const saveData = async (data) => {
  await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(data));
};

export const addKegiatan = async (item) => {
  const data = await readData();
  data.push(item);
  await saveData(data);
};

export const updateKegiatan = async (id, newItem) => {
  const data = await readData();
  const updated = data.map((k) => (k.id === id ? newItem : k));
  await saveData(updated);
};

export const deleteKegiatan = async (id) => {
  const data = await readData();
  const filtered = data.filter((k) => k.id !== id);
  await saveData(filtered);
};
