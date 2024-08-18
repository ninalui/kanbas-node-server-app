export default [
  {
    "_id": "1",
    "quiz": "Q101",
    "course": "RS101",
    "question": "MC Question",
    "type": "MC",
    "points": 2,
    "options": [
      {
        "_id": 1,
        "value": "Option 1",
        "correct": true
      },
      {
        "_id": 2,
        "value": "Option 2",
        "correct": false
      },
      {
        "_id": 3,
        "value": "Option 3",
        "correct": false
      },
      {
        "_id": 4,
        "value": "Option 4",
        "correct": false
      }
    ],
  },

  {
    "_id": "2",
    "quiz": "Q101",
    "course": "RS101",
    "question": "TF Question",
    "type": "TF",
    "points": 2,
    "options": [
      {
        "_id": 1,
        "value": "True",
        "correct": true
      },
      {
        "_id": 2,
        "value": "False",
        "correct": false
      }
    ],
  },

  {
    "_id": "3",
    "quiz": "Q101",
    "course": "RS101",
    "question": "Fill-in Question",
    "type": "Fill-in",
    "points": 2,
    "options": [
      {
        "_id": 1,
        "value": "Option 1"
      },
      {
        "_id": 2,
        "value": "Option 2"
      },
      {
        "_id": 3,
        "value": "Option 3"
      }
    ],
  }
];