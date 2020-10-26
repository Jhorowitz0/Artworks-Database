import controller from '../controllers/controller';

const routes = (server) => {
    server.route('/')
        .get(controller.renderArtworksList);

    server.route('/add')
        .post(controller.addArtwork);
}

export default routes;