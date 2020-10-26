import controller from '../controllers/controller';

const routes = (server) => {
    server.route('/')
        .get(controller.renderArtworksList);
}

export default routes;