import { Pagination } from "@nextui-org/react";
import { usePoke } from "../hooks/usePoke";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motionTransition";

const PokePaginator = () => {
  const {
    totalPages,
    setCurrentPage,
    itemsPerPage,
    currentPage,
    searchFilter,
    pokeName,
  } = usePoke();

  const handlePageChange = (newPage) => {
    if (newPage === 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(newPage * itemsPerPage);
    }
  };

  const page = currentPage / itemsPerPage;

  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex justify-center mt-10 mb-10 z-30"
    >
      {pokeName.includes(searchFilter) ? null : (
        <Pagination
          total={totalPages}
          page={page}
          color="danger"
          size="lg"
          showControls
          onChange={handlePageChange}
        />
      )}
    </motion.div>
  );
};

export default PokePaginator;
