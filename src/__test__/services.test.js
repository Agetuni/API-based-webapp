import getNumberofComment from '../module/services.js';
import CommentList from '../module/CommentList.js';
import Comment from '../module/comment.js';

describe('getNumberofComment', () => {
  it('getNumberofComment must give exact number of comments', () => {
    // arrange
    const list = new CommentList();
    list.push(new Comment('a', 'b', 'c'));
    list.push(new Comment('a', 'b', 'c'));
    list.push(new Comment('a', 'b', 'c'));
    // act
    const result = getNumberofComment(list);
    expect(result).toStrictEqual(3);
  });

  it('getNumberofComment must give 0 for empty comments', () => {
    // arrange
    const list = new CommentList();
    // act
    const result = getNumberofComment(list);
    expect(result).toStrictEqual(0);
  });
});
