const axios = require("axios").default;

const matchKeyWords = {
  shopping: {
    keyWords: ["buy", "get", "purchase", "shopping"],
    categoryId: 104,
  },
  theatres: {
    keyWords: ["watch", "see", "films", "play"],
    categoryId: 101,
  },
  museums: {
    keyWords: ["museum", "museums", "gallery", "collection"],
    categoryId: 103,
  },
  restaurants: {
    keyWords: ["eat", "drink", "binge","restaurant", "restaurants", "food"],
    categoryId: 102,
  },
  tours: {
    keyWords: ["boat", "walking", "tours", "tour", "cruise"],
    categoryId: 105,
  },
};

//function that matches message to category_id:
const categorizeMessage = function (pinnedMessage, matchKeyWords) {
  let category_id;
  let arraySentence = pinnedMessage.toLowerCase().split(" ");
  for (let word of arraySentence) {
    if (matchKeyWords.shopping["keyWords"].includes(word)) {
      category_id = 104;
    }
  }
  for (let word of arraySentence) {
    if (matchKeyWords.restaurants["keyWords"].includes(word)) {
      category_id = 102;
    }
  }
  for (let word of arraySentence) {
    if (matchKeyWords.theatres["keyWords"].includes(word)) {
      category_id = 101;
    }
  }
  for (let word of arraySentence) {
    if (matchKeyWords.museums["keyWords"].includes(word)) {
      category_id = 103;
    }
  }
  for (let word of arraySentence) {
    if (matchKeyWords.tours["keyWords"].includes(word)) {
      category_id = 105;
    }
  }
  return category_id;
};
exports.categorizeMessage = categorizeMessage;

const apiMatchMessage = async function (pinnedMessage, categoryId) {
  
  const gettingKeyTerm = function () {
    const sentenceArray = pinnedMessage.split(" ");
    sentenceArray.forEach((word, index) => {
      if (word === "called") {
        sentenceArray.splice(0, index);
        sentenceArray.shift();
      }
    });
    return sentenceArray;
  };
  const keyterm = gettingKeyTerm();
  if (categoryId === 102) {
    var settings = {
      url: `https://api.yelp.com/v3/businesses/search?term=${keyterm}&location=Hawaii&categories=restaurants`,
      method: "GET",
      timeout: 0,
      headers: {
        Authorization:
          "Bearer Rnsnn2hNsZYOAJJy2f_lHSg1QwFQ_eTg8UP2QOq4EwQ1MHxMOlm7ZJNhfGJxZL4BLvNwEHC8cdJI8rGR-g-Jii1_HPxHDZ75pcI_3GIJtRMYyBYiayVgrTlSyvOiYXYx",
      },
    };
    const result = await axios.request(settings);
    console.log(result.data.businesses[0], "result---line 83")
    return result.data.businesses[0];
  }
  if (categoryId === 103) {
    var settings = {
      url: `https://api.yelp.com/v3/businesses/search?term=${keyterm}&location=Hawaii&categories=museums`,
      method: "GET",
      timeout: 0,
      headers: {
        Authorization:
          "Bearer Rnsnn2hNsZYOAJJy2f_lHSg1QwFQ_eTg8UP2QOq4EwQ1MHxMOlm7ZJNhfGJxZL4BLvNwEHC8cdJI8rGR-g-Jii1_HPxHDZ75pcI_3GIJtRMYyBYiayVgrTlSyvOiYXYx",
      },
    };
    const result = await axios.request(settings);
    console.log("result-----", result.data.businesses[0]);
    return result.data.businesses[0];
  }
  if (categoryId === 105) {
    var settings = {
      url: `https://api.yelp.com/v3/businesses/search?term=${keyterm}&location=Hawaii&categories=tours`,
      method: "GET",
      timeout: 0,
      headers: {
        Authorization:
          "Bearer Rnsnn2hNsZYOAJJy2f_lHSg1QwFQ_eTg8UP2QOq4EwQ1MHxMOlm7ZJNhfGJxZL4BLvNwEHC8cdJI8rGR-g-Jii1_HPxHDZ75pcI_3GIJtRMYyBYiayVgrTlSyvOiYXYx",
      },
    };
    const result = await axios.request(settings);
    return result.data.businesses[0];
  }
};
exports.apiMatchMessage = apiMatchMessage;

const addYelpUrl = async function (text) {
  try {
    const categoryId = categorizeMessage(text, matchKeyWords);
    const response = await apiMatchMessage(text, categoryId);
    console.log("category line 118", categoryId)
    return response;
  } catch (error) {
    console.log(error, "line 120");
    return;
  }
};
exports.addYelpUrl = addYelpUrl;
