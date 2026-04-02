import { Request, Response, NextFunction } from 'express';

export const exampleController = {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: 'Get all items', data: [] });
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      res.json({ message: `Get item ${id}`, data: null });
    } catch (error) {
      next(error);
    }
  },

  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      res.status(201).json({ message: 'Item created', data });
    } catch (error) {
      next(error);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      res.json({ message: `Item ${id} updated`, data });
    } catch (error) {
      next(error);
    }
  },

  remove: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      res.json({ message: `Item ${id} deleted` });
    } catch (error) {
      next(error);
    }
  }
};
