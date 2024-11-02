const express = require('express');
const multer = require('multer');
const { sequelize, Client, Stock, Commande } = require('../database');
const XLSX = require('xlsx');

const router = express.Router();

// Configuration de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Dossier où le fichier sera sauvegardé
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Conserve le nom original du fichier
  }
});

const upload = multer({ storage });

// Route pour importer les données depuis le fichier Excel
router.post('/import', upload.single('file'), async (req, res) => {
  try {
    // Lire le fichier Excel à partir du chemin téléchargé
    const workbook = XLSX.readFile(req.file.path);

    // Feuille Clients
    const clientsSheet = workbook.Sheets['Clients'];
    const clientsData = XLSX.utils.sheet_to_json(clientsSheet);
    await Client.bulkCreate(clientsData, { ignoreDuplicates: true }); // Ignorer les doublons si nécessaire

    // Feuille Stock
    const stockSheet = workbook.Sheets['Stock'];
    const stockData = XLSX.utils.sheet_to_json(stockSheet);
    await Stock.bulkCreate(stockData, { ignoreDuplicates: true });

    // Feuille Commandes
    const commandesSheet = workbook.Sheets['Commandes'];
    const commandesData = XLSX.utils.sheet_to_json(commandesSheet);
    await Commande.bulkCreate(commandesData, { ignoreDuplicates: true });

    console.log('Données insérées avec succès !');
    res.status(200).send('Données insérées avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données :', error);
    res.status(500).send('Erreur lors de l\'insertion des données');
  }
});

module.exports = router;
