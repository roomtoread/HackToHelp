 module.exports = function() {
  var template = isIPad ? nrequire('/templates/windows/ipad/chapters') :
                          nrequire('/templates/windows/chapters');
  return template.render();
};
