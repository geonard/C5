import axios from 'axios';

const API_URL = 'http://localhost:3003';

export const fetchEvents = () => axios.get(`${API_URL}/billeterie`);
export const fetchPointsOfInterest = () => axios.get(`${API_URL}/pointsOfInterest`);
