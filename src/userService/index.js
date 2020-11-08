let data = [
    {user: {login: "trrttrtrsrfewrwed", email: "nurgaliev.tr@phystech.edu"},
     password: "qwerty", data: [{id: 1, name: "Пошутить", category: "outdoors", description: "Смешно пошутить", time: "12:22", rating: 4, minimized: true},
     {id: 2, name: "Пошутить", category: "outdoors", description: "Смешно пошутить", time: "00:10", rating: 5, minimized: true},
     {id: 3, name: "Пошутить", category: "outdoors", description: "Смешно пошутить", time: "00:20", rating: 4, minimized: true},]}
]

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
}

function rejectAfter1Second(error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(error);
        }, 1000);
      });
}

async function addUser(user, password) {
    if (data.find((elem) => { return elem.user.email == user.email}) == null) {
        console.log("addUser OK")
        data.push({user: user, password: password, data: []})
        return resolveAfter2Seconds({user: user, data: []})
    } else {
        console.log("addUser REJECT")
        return rejectAfter1Second("user with such email already exists")
    }   
} 

async function enter(email, password) {
    console.log("enter", email, password)
    let find_result = data.find((elem) => { return elem.user.email == email && elem.password == password})
    console.log(find_result)
    if (find_result == null) {
        console.log("enter REJECT")
        return rejectAfter1Second("incorrect email or password")
    } else {
        console.log("enter OK")
        return resolveAfter2Seconds({user: find_result.user, data: find_result.data})
    }   
} 

async function sdata(new_data, email) {
  console.log("sdata", new_data, email)
  let find_result = data.find((elem) => { return elem.user.email == email})
  console.log("find result", find_result)
    if (find_result == null) {
        console.log("set data REJECT")
        return rejectAfter1Second("incorrect email to set data")
    } else {
        console.log("set data OK")
        data = data.map((elem) => {
          if (elem.user.email == email) {
            return {user: elem.user, password: elem.password, data: new_data}
          }
          return elem
        })
        return resolveAfter2Seconds({user: find_result.user, data: new_data})
    }   
}

const UserService = {
  signup(user, password) {
    return addUser(user, password)
    //return http('signup', 'POST', {user, password})
  },
  login(email, password) {
    console.log('login');
    return enter(email, password)
    //return http('signin', 'POST', {email, password})
  },
  setdata(data, email) {
    return sdata(data, email)
    // return http('setdata', 'POST', {email, data})
  }
};

export default UserService;