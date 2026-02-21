import jwt from "jsonwebtoken";

const SECRET =
  "code wtit askjfnasf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf";

export function generateToken(user: {
  id: string;
  name: string;
  email: string;
  role: string;
}) {
  return jwt.sign(user, SECRET, { expiresIn: "1d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
    console.log(error);
  }
}
