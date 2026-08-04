import { Router } from "express";

const router = Router();

router.get('/',(_, res) => {
    return res.send('Hello World');
})

router.post('/',(req, res) => {
    console.log(req.body);
    return res.json(req.body);
})

export { router };