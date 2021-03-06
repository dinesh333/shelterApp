import mongoose from 'mongoose';
//import models
import  Favourite from '../models/favourite.server.model';
export const addFavourite = (req,res) => {
        console.log(req.body);
        //Create a new instance of Shelter model
        const newFavourite = new Favourite();
        newFavourite.shelter = req.body.id;
        newFavourite.save((err,favourite) => {
          if(err){
          return res.json({'success':false,'message':'Some Error'});
          }

          Favourite.findOne({'_id':favourite._id}).populate('shelter').exec((err,f) => {
            if(err){
            return res.json({'success':false,'message':'Some Error'});
            }

            return res.json({'success':true,'message':'Favourite fetched successfully',f});
          });
        })

}

 export const getFavourites = (req,res,next) => {
         Favourite.find().populate('shelter').exec((err,favourites) => {
           if(err){
           return res.json({'success':false,'message':'Some Error'});
           }

           return res.json({'success':true,'message':'Favourites fetched successfully',favourites});
         })
}

export const deleteFavourite = (req,res) => {
  Favourite.findByIdAndRemove(req.params.id,(err,shelter) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
  
    return res.json({'success':true,'message':'Favourite Deleted Successfully'});


  })
}
