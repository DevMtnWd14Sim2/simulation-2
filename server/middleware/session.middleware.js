function initializeSession(req, res, next) {
    const { session, method } = req;
    if (!session.user) {
        session.user = {
            properties: []
        };
    }
    next();
}

module.exports = initializeSession;