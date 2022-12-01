import * as bcrypt from 'bcrypt';
export async function ComparePassword(passwordBody: string, hash: string){
  const isMatch = bcrypt.compareSync(passwordBody, hash);
  return await Promise.resolve(isMatch);
}
