import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;

/**
 * App
 */
public class App {

    private static void step1(Path path) throws FileNotFoundException, IOException {
        final HashMap<String, Integer> hMap = new HashMap<>();
        hMap.put("up", 0);
        hMap.put("down", 0);
        hMap.put("forward", 0);

        try (
                FileReader fr = new FileReader(path.toString());
                BufferedReader br = new BufferedReader(fr)) {
            String st;

            while ((st = br.readLine()) != null) {
                final String[] parts = st.split(" ");
                hMap.put(parts[0], hMap.get(parts[0]) + Integer.parseInt(parts[1]));
            }
        }

        System.out.println("Step 1: " + hMap.get("forward") * (hMap.get("down") - hMap.get("up")));
    }

    private static void step2(Path path) throws FileNotFoundException, IOException {
        final HashMap<String, Integer> hMap = new HashMap<>();
        hMap.put("forward", 0);
        hMap.put("objective", 0);
        hMap.put("depth", 0);

        try (
                FileReader fr = new FileReader(path.toString());
                BufferedReader br = new BufferedReader(fr)) {
            String st;

            while ((st = br.readLine()) != null) {
                final String[] parts = st.split(" ");
                final int num = Integer.parseInt(parts[1]);

                switch (parts[0]) {
                    case "up":
                        hMap.put("objective", hMap.get("objective") - num);
                        break;
                    case "down":
                        hMap.put("objective", hMap.get("objective") + num);
                        break;
                    case "forward":
                        hMap.put("depth", hMap.get("depth") + (hMap.get("objective") * num));
                        hMap.put("forward", hMap.get("forward") + num);
                        break;
                    default:
                        break;
                }
            }
        }

        System.out.println("Step 2: " + hMap.get("forward") * hMap.get("depth"));
    }

    public static void main(String[] args) throws FileNotFoundException, IOException {
        final Path path = Paths.get("exercise-02/data/input.txt");

        step1(path.toAbsolutePath());
        step2(path.toAbsolutePath());
    }
}