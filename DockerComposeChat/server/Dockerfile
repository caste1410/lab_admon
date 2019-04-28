FROM golang:latest
WORKDIR /go/src/app
COPY ./main.go  /go/src/app
RUN go build -o server
CMD ["./server" ]