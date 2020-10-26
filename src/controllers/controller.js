import mongoose from 'mongoose';
import models from '../models/models';

const Artwork = mongoose.model('Artwork', models.artworkSchema);

const controller = {
    renderArtworksList: (req,res)=>{
        res.send('artworks rendered');
    }
}

export default controller;