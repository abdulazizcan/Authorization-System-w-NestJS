import * as bcrypt from 'bcrypt';
export function ComparePassword(passwordBody: string, hash: string) {
  const isMatch = bcrypt.compareSync(passwordBody, hash);
  return isMatch;
}
