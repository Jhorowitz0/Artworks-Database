import mongoose from 'mongoose';
import models from '../models/models';

const Artwork = mongoose.model('Artwork', models.artworkSchema);

const controller = {
    renderArtworksList: (req,res)=>{
        Artwork.find({}, (err,artworks) => {
            if(err)res.send(err);
            res.send(artworks);
        });
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