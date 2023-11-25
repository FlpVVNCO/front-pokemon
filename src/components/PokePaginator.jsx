import { Pagination } from "@nextui-org/react";
import { usePoke } from "../hooks/usePoke";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motionTransition";

const PokePaginator = () => {
  const { totalPages, setCurrentPage, itemsPerPage, isFlag } =
    usePoke();

  const handlePageChange = (newPage) => {
    if (newPage === 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(newPage * itemsPerPage);
    }
  };

  return (
    <>
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex justify-center mt-10 mb-10 z-30"
      >
        {!isFlag ? (
          <Pagination
            total={totalPages}
            color="danger"
            size="lg"
            showControls
            onChange={handlePageChange}
          />
        ) : null}
      </motion.div>
    </>
  );
};

export default PokePaginator;
