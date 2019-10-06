class User {
  constructor(user = { id: undefined, username: '', password: '' }) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
  }
}

export { User as default };
