cd frontend && npm run lint && cd .. && ./gradlew build && ./gradlew bootRun -Plocal
# local profile also enables the custom JWT decoder which accepts expired tokens (see security config)