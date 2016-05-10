import store from '../../../STORE.jsx';

export const SELECT_TOPIC = 'SELECT_TOPIC';
export const GET_TOPICS = 'GET_TOPICS';
export const LOAD_TOPICS = 'LOAD_TOPICS';

export function selectTopic(currentTopic) {
  fetch('/api/topic', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: currentTopic,
    }),
  }).then((topicPromise) => topicPromise.text())
    .then((topicJSON) => {
    store.dispatch(getTopics());
    let topicObj = JSON.parse(topicJSON)[0];
    store.dispatch({ type: SELECT_TOPIC, topicId: topicObj.id });
  }).catch((error) => {
    console.err(error);
  });
}

export function getTopics() {
  fetch('/api/topic', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((topics) => topics.text())
      .then((topics) => {
        store.dispatch(loadTopics(topics));
    }).catch((error) => {
      console.log("This is the error in getTopics",error);
    });

  return { type: GET_TOPICS, fetching: true };
}

export function loadTopics(topics) {
  return { type: LOAD_TOPICS, fetching: false, topics }
}