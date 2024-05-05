#!/bin/zsh

kubectl port-forward svc/community-service -n community-service 8091:9001 &
kubectl port-forward svc/image-service -n image-service 8092:9002 &
kubectl port-forward svc/notification-service -n notification-service 8093:9003 &
kubectl port-forward svc/user-service -n user-service 8094:9004
