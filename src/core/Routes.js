module.exports = (app) => {
    const uploadRoutes = require('../api/upload/routes/uploadRoutes');
    app.use('/api/v1/upload/graph', uploadRoutes);

    const uploadRoutes2 = require('../api/upload/routes/uploadRoutes');
    app.use('/api/v1/graph/images', uploadRoutes2);

    const uploadRoutes3 = require('../api/upload/routes/uploadRoutes');
    app.use('/api/v1/graph/show', uploadRoutes3);
    
}