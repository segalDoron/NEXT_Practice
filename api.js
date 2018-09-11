import axios from 'axios'

export const fetchUserProfile = userName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: `id_${userName}_${new Date().getTime()}` })
    }, 1200)
  })
}

export const fetchOrders = userName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([`order1_of_${userName}`, `order2_of_${userName}`])
    }, 1300)
  })
}

export const fetchCustomers = userName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([`customer1_of_${userName}`, `customer2_of_${userName}`])
    }, 1500)
  })
}

export const login = login => {
  return axios.get('https://www.10bis.co.il/api/login?username=doron@10bis.co.il&password=Spot5564')
    .then(function (response) {
      return new Promise.resolve('ok')
      console.log(response);
    })
    .catch(function (error) {
      return new Promise.reject(error)
      console.log(error);
    });
}
