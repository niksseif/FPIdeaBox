import * as R from "ramda";

const generateIdea = (idea) => {
  const makeId = () => idea.id || Date.now();
  const makeTitle = () => idea.title;
  const makeBody = () => idea.body;
  const makeStar = () => (idea.star ? idea.star : false);

  const addId = (idea) => ({ ...idea, id: makeId() });
  const addTitle = (idea) => ({ ...idea, title: makeTitle() });
  const addBody = (idea) => ({ ...idea, body: makeBody() });
  const addStarred = (idea) => ({ ...idea, star: makeStar() });
  return R.pipe(addId, addTitle, addBody, addStarred)(idea);
};

module.exports = {
  generateIdea,
};
