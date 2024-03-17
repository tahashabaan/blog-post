const message = (
  mesg: { key: string; message: string; dir: string },
  req,
  res
) => {
  req.flash(mesg.key, mesg.message);
  return res.redirect(mesg.dir);
};

export default message;
