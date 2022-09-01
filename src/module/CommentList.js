class CommentList {
  constructor(list = []) {
    this.List = list;
  }

  push(comment) {
    this.List.push(comment);
  }
}
export default CommentList;