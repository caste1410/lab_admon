FROM golang:latest
WORKDIR /go/src/app
COPY ./main.go  /go/src/app
RUN go get -d -v github.com/chzyer/readline
RUN go build -o cliente
CMD ["./cliente", "|", "echo", "conn server.com"]