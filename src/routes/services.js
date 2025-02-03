import express from 'express';
import { supabase } from '../index.js';

const router = express.Router();

// Get all services
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*');
    
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get service by ID with providers
router.get('/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select(`
        *,
        provider_services (
          *,
          providers (*)
        )
      `)
      .eq('id', req.params.id)
      .single();
    
    if (error) throw error;
    if (!data) {
      return res.status(404).json({ error: 'Service not found' });
    }
    
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const serviceRoutes = router;