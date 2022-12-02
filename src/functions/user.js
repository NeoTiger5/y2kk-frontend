import axios from "axios";
export const updateprofilePicture = async (url, token) => {
  try {
    const { data } = await axios.put(
      `${"https://y2kk.tk"}/updateProfilePicture`,
  
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
      `${"https://y2kk.tk"}/updateCover`,

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
      `${"https://y2kk.tk"}/addFriend/${id}`,

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
      `${"https://y2kk.tk"}/cancelRequest/${id}`,
  
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
      `${"https://y2kk.tk"}/follow/${id}`,

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
      `${"https://y2kk.tk"}/unfollow/${id}`,
   
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
      `${"https://y2kk.tk"}/acceptRequest/${id}`,
 
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
      `${"https://y2kk.tk"}/unfriend/${id}`,
    
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
      `${"https://y2kk.tk"}/deleteRequest/${id}`,
    
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
      `${"https://y2kk.tk"}/search/${searchTerm}`,
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
      `${"https://y2kk.tk"}/addToSearchHistory`,
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
      `${"https://y2kk.tk"}/getSearchHistory`,

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
      `${"https://y2kk.tk"}/removeFromSearch`,
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
      `${"https://y2kk.tk"}/getFriendsPageInfos`,

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
      `${"https://y2kk.tk"}/userChat/${userId}`,
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
      `${"https://y2kk.tk"}/getFriends`,
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
