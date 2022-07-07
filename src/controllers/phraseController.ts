import { Request, Response } from 'express';
import { Phrase } from '../models/Phrase';

export const createOnePhrase = async (req: Request, res: Response) =>{
    let author: string = req.body.author;
    let txt: string = req.body.txt;

    let newPhrase = await Phrase.create({author, txt});
    res.status(201);
    res.json({id: newPhrase.id, author: author, txt: txt})
}

export const selectAllPhrases = async (req: Request, res: Response) =>{
    let allPhrases = await Phrase.findAll();

    res.status(200);
    res.json({allPhrases});
}

export const selectOnePhrase = async (req: Request, res: Response) =>{
    let { id } = req.params;
    
    let onePhrase = await Phrase.findByPk(id);

    if(onePhrase)
    {
        res.json({onePhrase});
    }
    else
    {
        res.status(404);
        res.json({erro: 'Frase não encontrada'});
    }
}

export const updateOnePhrase = (req: Request, res: Response) =>{
    res.json({pong: true});
}

export const deleteOnePhrase = (req: Request, res: Response) =>{
    res.json({pong: true});
}



