const Blogger = require('./Blogger');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blogger.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(Blogger, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignkey: 'user_id',
    onDelete: 'cascade'
});

Blogger.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'cascade'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'cascade'
});

module.exports = {Blogger, Blog, Comment};