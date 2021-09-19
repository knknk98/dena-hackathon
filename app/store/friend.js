export const state = () => ({
  friends: [],
  userId: '',
  userInfo: {
    id: '',
    userName: '',
    displayName: '',
    iconUrl: '',
  },
})

export const mutations = {
  updateFriends(state, friends) {
    state.friends = friends
  },
  updateUserId(state, userId) {
    state.userId = userId
    console.log(state.userId)
  },
  updateUserInfo(state, userInfo) {
    state.userInfo.id = userInfo.id
    state.userInfo.userName = userInfo.userName
    state.userInfo.displayName = userInfo.displayName
    state.userInfo.iconUrl = userInfo.iconUrl
  },
}

// 値を取得する際には
// this.$store.state.friend.friends

// 値を代入する際には
// this.$store.commit('friend/updateFriends', friends)
