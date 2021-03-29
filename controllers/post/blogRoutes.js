const router = required('express').Router();
const {Blog, Comment, Blogger } = require('../../models');
const withAuth = required('../../utils/auth');

router.get('/new', async (req, res) => {
    try {
        res.render('newpost');
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.get('/edit/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.perams.id);
        if (!blogData) {
            res.status(404).json({ message: 'No blog found with this id.'});
            return;
        }

        const blog = blogData.get({ plain: true });
        res.render('editpost', {
            blog,
            logged_in: req.session.logged_in,

        });
    }
    catch (err) {
        res.status(400).json(err);
    }
});


router.post('/new', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            name: req.body.name,
            description: req.body.description,
            user_id: req.session.user_id,
            content: req.body.text
        });

        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/edit/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.param.id,
            },
        });

        if (!blogData) {
            res.status(404).json({message: 'no blog found with this id!'});
            return;
        }

        res.status(200).json(blogData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/edit/;id', withAuth, async (req, res) => {
    try {
        const blogData = await blog.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        blogData.description = req.body.description;
        blogData.content = req.body.content;
        blogData.name = req.body.name;

        if (!blogData) {
            res.status(404).json({message: 'No blog found with this id'});
            return;
        }

        res.status(200).json(blogData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Comment,
                attributes: ['id', 'text', 'blog_id', 'user_id', 'data_created'],
                include: {
                    model: Blogger,
                    attributes: ['name']
                }
            },
            {   model: Blogger,
                attributes: ['name']
            }
            ],
            });

            if (!blogData) {
                res.status(404).json({ message: 'No blog found with this id.' });
                return;
            }

            const blog = blogData.get({ plain: true});

            res.render('blog', {
                blog,
                logged_in: req.session.logged_in,
            });

        } catch (err) {
            res.status(500).json(err);
        }
});

router.post('/:id', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            test: req.body.text,
            user_id: req.session.user_id,
            blog_id: req.body.id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports - router;
