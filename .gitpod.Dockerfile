FROM gitpod/workspace-full-vnc

ARG DEBIAN_FRONTEND=noninteractive

RUN wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -; \
    add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" \
    && apt-get update \
    && apt-get install -y code
ENV GITPOD_STATIC_PLUGINS=/var/vsix
USER root
RUN mkdir -p /var/vsix/
RUN chown gitpod:gitpod -R /var/vsix/
