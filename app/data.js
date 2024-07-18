const emojies = [];

const findEmoji = (id) => emojies.findIndex((e) => e.id == id);

const getEmo = () => emojies;

//add
const addEmo = (emoji, emojiName) => {
  const items = {
    id: new Date().getTime(),
    emoji: emoji,
    emojiName: emojiName,
  };
  emojies.push(items);
  return items;
};

//update

const updateEmoji = ({ id, emoji, emojiName }) => {
  const index = emojies.findIndex((e) => e.id == id);
  if (index != -1) {
    emojies[index]['emoji'] = emoji;
    emojies[index]['emojiName'] = emojiName;
    return emojies[index];
  }
};

//delete
const deleteById = (id) => {
  const index = emojies.findIndex((e) => e.id == id);
  if (index == -1) {
    return null;
  }
  const em = emojies[index];
  emojies.splice(index, 1);
  return em;
};
module.exports = {
  addEmo,
  getEmo,
  deleteById,
  updateEmoji,
  findEmoji,
};
