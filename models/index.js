const Blogger = require('./Blogger');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blogger.hasMany(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(Blogger, {
    foreignKey: 'blogger_id'
});

Comment.belongsTo(Blogger, {
    foreignkey: 'blogger_id',
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