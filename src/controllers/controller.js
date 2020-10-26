import mongoose from 'mongoose';
import models from '../models/models';

const Artwork = mongoose.model('Artwork', models.artworkSchema);

const controller = {
    renderArtworksList: (req,res)=>{
        res.send('artworks rendered and updated');
    },

    addArtwork: (req,res) => {
        let newArtwork = new Artwork(req.body);

        newArtwork.save((err,artwork) => {
            if(err) res.send(err);

            res.send(artwork);
        });
    },
}

export default controller;