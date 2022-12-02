import axios from "axios";
export const updateprofilePicture = async (url, token) => {
  try {
    const { data } = await axios.put(
      `${"http://52.66.200.225"}/updateProfilePicture`,
  
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};

export const updateCover = async (url, token) => {
  try {
    const { data } = await axios.put(
      `${"http://52.66.200.225"}/updateCover`,

      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};

export const addFriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${"http://52.66.200.225"}/addFriend/${id}`,

      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return "ok";
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

export const cancelRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${"http://52.66.200.225"}/cancelRequest/${id}`,
  
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const follow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${"http://52.66.200.225"}/follow/${id}`,

      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const unfollow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${"http://52.66.200.225"}/unfollow/${id}`,
   
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const acceptRequest = async (id, token) => {

  try {
    const { data } = await axios.put(
      `${"http://52.66.200.225"}/acceptRequest/${id}`,
 
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const unfriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${"http://52.66.200.225"}/unfriend/${id}`,
    
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const deleteRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${"http://52.66.200.225"}/deleteRequest/${id}`,
    
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};


export const search = async (searchTerm, token) => {
  try {
    const { data } = await axios.post(
      `${"http://52.66.200.225"}/search/${searchTerm}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const addToSearchHistory = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `${"http://52.66.200.225"}/addToSearchHistory`,
      { searchUser },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const getSearchHistory = async (token) => {
  try {
    const { data } = await axios.get(
      `${"http://52.66.200.225"}/getSearchHistory`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const removeFromSearch = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `${"http://52.66.200.225"}/removeFromSearch`,
      { searchUser },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const getFriendsPageInfos = async (token) => {
  try {
    const { data } = await axios.get(
      `${"http://52.66.200.225"}/getFriendsPageInfos`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: "ok", data };
  } catch (error) {
    return error.response.data.message;
  }
};



export const userChat = async (userId,token) => {
  try {
    const { data } = await axios.get(
      `${"http://52.66.200.225"}/userChat/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};


export const getFriends = async (token) => {
  
  try {
    const { data } = await axios.get(
      `${"http://52.66.200.225"}/getFriends`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
