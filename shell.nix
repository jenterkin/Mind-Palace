{ pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  packages = with pkgs; [
    bash-language-server
    nixd
    nodejs_22
  ];
}
