const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftSchema = new Schema({
    product: {type: String, require: true},
    shopUrl: {type: String, require: true},
    cost: {type: String, require: true},
    imgUrl: {type: String, require: true},
    booked: {type: Boolean}
});

module.exports = mongoose.model('Gift', giftSchema);

/*
                <Gift name="Banquet 24dílná sada příborů Apetit Daphne" img={prib} url="https://mikrovlnne-trouby.heureka.cz/mora-mt-321-s/#prehled/" cena="1699,-"/>
                <Gift name="Pánev Tefal Simply Clean B5670553, 26 cm" img={pan} url="https://mikrovlnne-trouby.heureka.cz/mora-mt-321-s/#prehled/" cena="1699,-"/>
                <Gift name="ERNESTO® Sada hrnků, 4dílná" img={hrn} url="https://mikrovlnne-trouby.heureka.cz/mora-mt-321-s/#prehled/" cena="1699,-"/>
                <Gift name="LIVARNO home Sada froté ručníků, 6dílná" img={ruc} url="https://mikrovlnne-trouby.heureka.cz/mora-mt-321-s/#prehled/" cena="1699,-"/>
                <Gift name="Sada talířů BANQUET Marion, 18 ks" img={tal} url="https://mikrovlnne-trouby.heureka.cz/mora-mt-321-s/#prehled/" cena="1699,-"/>
 */
/**
 "product": "",
 "shopUrl": "",
 "cost": "",
 "imgUrl": "",
 "booked": false
 **/