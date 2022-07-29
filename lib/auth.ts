import jwt from "jsonwebtoken";
import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.SERHAT_ACCESS_TOKEN;
    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not real user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not Authorizied" });
        return;
      }
      return handler(req, res, user);
    }
  };
};
