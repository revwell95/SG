{ pkgs, ... }:

{
  devShells.default = pkgs.mkShell {
    buildInputs = [
      pkgs.nodejs_20
    ];
    shellHook = ''
      if [ ! -d node_modules ]; then
        echo "Installing npm dependencies..."
        npm install
      fi
    '';
  };
}
