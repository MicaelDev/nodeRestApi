import { on } from 'events';
import { Request, Response } from 'express';
import { stringify } from 'querystring';
import { Phrase } from '../models/Phrase';
import { Sequelize } from 'sequelize';

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

export const updateOnePhrase = async (req: Request, res: Response) =>{
    let { id } = req.params;
    let { author, txt } = req.body;

    let phrase = await Phrase.findByPk(id);
    if (phrase) 
    {
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save();

        res.json({ phrase });
    }
    else
    {
        res.json({ error: 'Frase não encontrada' });
    }
}

export const deleteOnePhrase = async (req: Request, res: Response) =>{
    let { id } = req.params;

    await Phrase.destroy({
        where: { id }
    });

    res.json({});
}

export const selectRandomPhrase = async (req: Request, res: Response) =>{
    let success: boolean = false;
    let phrase;
    
    while(!success){
        phrase = await Phrase.findOne({
            order: [
                Sequelize.fn('RAND')
            ]
        });

        if (phrase != null) {
            success = true;
        }
    }

    res.json({phrase});
}



